import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ScheduleIcon from '@material-ui/icons/Schedule';
// import Slide from '@material-ui/core/Slide';

import DateFnsUtils from '@date-io/date-fns';
import { formatISO } from 'date-fns';

import {
    MuiPickersUtilsProvider,
    TimePicker,
    DatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.spacing(2),
        width: "100%",
        margin: 0
    },
    centerInBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center'
    },
    horizontalCenter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    selectedAvatar: {
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        backgroundColor: theme.palette.secondary.main,
    },
    smallAvatar: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        marginLeft: '0.4em',
        marginRight: '0.4em',
        cursor: 'pointer'
    },
    verticalCenter: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
}))

const ScheduleDialog = (props) => {

    const classes = useStyles()
    // const theme = useTheme()

    const fromTime = props.dialogUserObject.fromTime
        ? new Date(props.dialogUserObject.fromTime)
        : new Date()
    const toTime = props.dialogUserObject.toTime
        ? new Date(props.dialogUserObject.toTime)
        : new Date()
    const [selectedDate, handleDateChange] = useState(new Date())

    // console.log(theme)

    // const Transition = React.forwardRef(function Transition(props, ref) {
    //     return <Slide direction="left" ref={ref} {...props} />
    // })

    const handleNotify = (event) => {
        props.setDialogUserObject({ ...props.dialogUserObject, notify: event.target.checked })
    }

    const handleAllDay = (event) => {
        if (!event.target.checked) {
            props.setDialogUserObject({
                ...props.dialogUserObject,
                allDay: event.target.checked,
                fromTime: formatISO(fromTime),
                toTime: formatISO(toTime)
            })
        }
        else {
            props.setDialogUserObject({ ...props.dialogUserObject, allDay: event.target.checked })
        }
    }

    const handleFromTime = (event) => {
        const newTime = formatISO(event)
        props.setDialogUserObject({ ...props.dialogUserObject, fromTime: newTime })

    }

    const handleToTime = (event) => {
        const newTime = formatISO(event)
        props.setDialogUserObject({ ...props.dialogUserObject, toTime: newTime })

    }

    const handleWeekly = (event) => {
        if (event.target.value) {
            props.setDialogUserObject({
                ...props.dialogUserObject,
                weekly: event.target.value,
                dateRange: !event.target.value
            })
        }
    }

    const handleDateRange = (event) => {
        console.log(event)
        if (event.target.value) {
            props.setDialogUserObject({
                ...props.dialogUserObject,
                weekly: !event.target.value,
                dateRange: event.target.value
            })
        }
    }

    return (
        <Dialog
            // TransitionComponent={Transition}
            fullWidth
            // maxWidth='xl'
            open={props.dialogOpen}
            onBackdropClick={props.closeDialog}
            onClose={props.closeDialog}
        >
            <DialogTitle>{`${props.name}'s notification schedule`}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.userScheduleString(props.dialogUserObject)}
                </DialogContentText>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="stretch"
                >
                    <Grid item xs={12}>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="stretch"
                        >
                            <Grid item xs={2} className={classes.centerInBlock}>
                                <NotificationsActiveIcon />
                            </Grid>
                            <Grid item xs={2} className={classes.verticalCenter}>
                                <span style={{ fontSize: '1rem' }}>Notify</span>
                            </Grid>
                            <Grid item xs={8}>
                                <Checkbox
                                    checked={props.dialogUserObject.notify}
                                    onChange={handleNotify}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '0.75em', marginBottom: '0.75em' }}>
                        <Divider variant="middle" />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="stretch"
                        >
                            <Grid item xs={2} className={classes.centerInBlock}>
                                <ScheduleIcon />
                            </Grid>
                            <Grid item xs={2} className={classes.verticalCenter}>
                                <span style={{ fontSize: '1rem' }}>All-day</span>
                            </Grid>
                            <Grid item xs={2}>
                                <Switch
                                    checked={props.dialogUserObject.allDay}
                                    onChange={handleAllDay}
                                />
                            </Grid>
                            {props.dialogUserObject.allDay &&
                                <Grid item xs={6}></Grid>
                            }
                            {!props.dialogUserObject.allDay &&
                                <Grid item xs={6}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="stretch"
                                    >
                                        <Grid item xs={3} className={classes.verticalCenter}>
                                            From
                                    </Grid>
                                        <Grid item xs={9} >
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <TimePicker
                                                    value={fromTime}
                                                    onChange={handleFromTime} />
                                            </MuiPickersUtilsProvider>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            }
                            {!props.dialogUserObject.allDay &&
                                <Grid item xs={6}>
                                </Grid>
                            }
                            {!props.dialogUserObject.allDay &&
                                <Grid item xs={6} >
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="stretch"
                                    >
                                        <Grid item xs={3} className={classes.verticalCenter}>
                                            To
                                    </Grid>
                                        <Grid item xs={9} >
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <TimePicker
                                                    value={toTime}
                                                    onChange={handleToTime} />
                                            </MuiPickersUtilsProvider>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '0.75em', marginBottom: '0.75em' }}>
                        <Divider variant="middle" />
                    </Grid>
                    <Grid item xs={12} >
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="stretch"
                        >
                            <Grid item xs={2} className={classes.centerInBlock}>
                                <Radio
                                    checked={props.dialogUserObject.weekly}
                                    onChange={handleWeekly}
                                />
                            </Grid>
                            <Grid item xs={2} className={classes.verticalCenter}>
                                <span style={{ fontSize: '1rem' }}>Weekly</span>
                            </Grid>
                            <Grid item xs={8} className={classes.verticalCenter}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="stretch"
                                >
                                    <Grid item>
                                        <Avatar style={{ marginLeft: '1em' }} className={[classes.smallAvatar, props.dialogUserObject.days.Monday ? classes.selectedAvatar : null].join(' ')}>M</Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Avatar className={[classes.smallAvatar, props.dialogUserObject.days.Tuesday ? classes.selectedAvatar : null].join(' ')}>T</Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Avatar className={[classes.smallAvatar, props.dialogUserObject.days.Wednesday ? classes.selectedAvatar : null].join(' ')}>W</Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Avatar className={[classes.smallAvatar, props.dialogUserObject.days.Thursday ? classes.selectedAvatar : null].join(' ')}>T</Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Avatar className={[classes.smallAvatar, props.dialogUserObject.days.Friday ? classes.selectedAvatar : null].join(' ')}>F</Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Avatar className={[classes.smallAvatar, props.dialogUserObject.days.Saturday ? classes.selectedAvatar : null].join(' ')}>S</Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Avatar className={[classes.smallAvatar, props.dialogUserObject.days.Sunday ? classes.selectedAvatar : null].join(' ')}>S</Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} ></Grid>
                    <Grid item xs={8} style={{ marginTop: '0.75em', marginBottom: '0.75em' }}>
                        <Divider variant="middle" />
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: '1em' }}>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="stretch"
                        >
                            <Grid item xs={2} className={classes.centerInBlock}>
                                <Radio
                                    checked={props.dialogUserObject.dateRange}
                                    onChange={handleDateRange}
                                />
                            </Grid>
                            <Grid item xs={2} className={classes.verticalCenter}>
                                <span style={{ fontSize: '1rem' }}>Date range</span>
                            </Grid>
                            <Grid item xs={8}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="stretch"
                                >
                                    <Grid item xs={2} style={{ marginLeft: '1.5em' }} className={classes.verticalCenter}>
                                        From
                                    </Grid>
                                    <Grid item xs={9}>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <DatePicker
                                                format="dd MMMM yyyy"
                                                value={selectedDate}
                                                onChange={handleDateChange} />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                    <Grid item xs={2} style={{ marginLeft: '1.5em' }} className={classes.verticalCenter}>
                                        To
                                    </Grid>
                                    <Grid item xs={9}>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <DatePicker
                                                format="dd MMMM yyyy"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.closeDialog} color="secondary">
                    Cancel
                </Button>
                <Button onClick={props.closeDialog} color="secondary">
                    Apply
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default React.memo(ScheduleDialog);