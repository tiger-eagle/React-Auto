import React from 'react';
import { useTheme } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';

const SignalIcon = () => {

    const theme = useTheme()

    const isDark = theme.palette.mode === 'dark'

    return (
        <SvgIcon>
            <defs>
                <clipPath clipPathUnits="userSpaceOnUse">
                    <path
                        fill="none"
                        fillOpacity="1"
                        stroke={isDark ? "#fff" : "#000"}
                        strokeDasharray="none"
                        strokeDashoffset="0"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="0.145"
                        d="M1.219 0.718H22.794V23.517H1.219z"
                        opacity="1"
                    ></path>
                </clipPath>
            </defs>
            <path
                fill={isDark ? "#fff" : "#000"}
                stroke={isDark ? "#fff" : "#000"}
                strokeDasharray="none"
                strokeMiterlimit="4"
                strokeOpacity="1"
                strokeWidth="0.375"
                d="M4.986 23.657c-.175-.154-.178-.165-.269-1.06-.05-.497-.08-.916-.065-.93.014-.013.243-.033.507-.044.395-.016.484-.004.494.065.007.046.03.253.05.46.023.245.06.378.106.378.084 0 .457.81.409.887-.042.067-.847.4-.967.4-.048 0-.168-.07-.265-.156zm2.074-1.005c-.08-.177-.169-.376-.195-.442-.046-.113.025-.153 1.12-.632.642-.281 1.174-.504 1.18-.494.06.083.387.888.369.905-.043.041-2.226.985-2.278.985-.027 0-.116-.145-.196-.322zm3.272-1.487c-.1-.22-.193-.428-.207-.463-.014-.034.085-.11.22-.167.21-.09.394-.105 1.333-.105h1.088l.035.245c.018.135.034.353.034.484v.238l-.345.04a6.95 6.95 0 01-.955 0c-.484-.032-.653-.022-.815.044l-.205.085-.183-.4zm3.526-.277a8.298 8.298 0 00-.09-.49c-.02-.07.071-.11.444-.187.259-.054.78-.197 1.157-.318.378-.12.702-.219.72-.219.063 0 .392.854.346.897-.126.117-1.655.57-2.33.689l-.18.032zm-9.452-1.244l-.099-.995-.584-.592c-.513-.518-1.063-1.162-1.063-1.244 0-.073.804-.564.847-.518.027.029.24.28.475.56s.61.669.833.865c.292.258.42.413.456.555.065.256.26 2.228.224 2.264-.016.016-.245.044-.51.064l-.481.037zm2.765.76c-.288-.118-.305-.208-.305-1.657v-1.35l-.421-.318a10.597 10.597 0 01-.958-.867c-2.684-2.75-2.972-6.894-.692-9.959.56-.753 1.537-1.64 2.384-2.165 2.19-1.358 5.137-1.7 7.655-.89.72.233 1.6.656 2.264 1.088.6.39 1.795 1.554 2.205 2.145 2.232 3.224 1.764 7.36-1.143 10.094-1.235 1.16-2.873 1.962-4.61 2.254-.742.125-2.186.154-2.79.057l-.341-.055-1.428.807c-.785.444-1.488.82-1.563.836a.52.52 0 01-.257-.02zm3.608-2.578c1.348.162 2.583.053 3.768-.332 1.18-.385 2.14-.955 2.991-1.777 1.016-.981 1.676-2.114 1.978-3.399.544-2.304-.264-4.813-2.085-6.477-1.478-1.351-3.362-2.065-5.449-2.065-.961 0-1.686.109-2.534.381-4.27 1.374-6.36 5.869-4.472 9.618.513 1.019 1.403 2.042 2.326 2.675.329.226.482.37.526.494.035.1.062.588.062 1.143v.968l1.145-.65 1.145-.65zm6.443 1.82l-.225-.422.264-.149a11.16 11.16 0 001.333-.896c.442-.348.4-.356.846.167l.226.265-.184.154c-.585.493-1.813 1.3-1.976 1.3-.033 0-.161-.188-.284-.42zm2.827-2.144l-.361-.327.3-.33c.273-.3 1.05-1.388 1.103-1.545.02-.059.716.27.862.407.056.053-.225.542-.61 1.06-.357.482-.843 1.062-.89 1.062-.024 0-.205-.147-.404-.327zM1.93 15.69c-.282-.451-.898-2.03-.849-2.176.012-.036.228-.12.479-.187l.456-.123.162.5c.09.276.296.774.46 1.109l.298.608-.415.226c-.228.124-.429.225-.446.225-.017 0-.082-.082-.145-.182zm20.065-1.125c-.23-.098-.414-.203-.41-.233.004-.03.096-.324.204-.654.109-.33.242-.828.297-1.108.096-.493.103-.507.241-.48.079.014.302.045.498.066.273.03.355.06.354.13-.004.431-.61 2.48-.728 2.462a6.93 6.93 0 01-.456-.183zm-21.23-2.42c-.077-.608-.107-1.428-.068-1.887l.041-.488.322.034c.177.018.399.045.494.06l.173.025-.002.825c-.002.453.017.99.04 1.194l.044.37-.3.038c-.164.021-.39.052-.503.07l-.205.03zm21.485-1.683c-.02-.362-.078-.892-.127-1.18-.05-.286-.081-.528-.07-.536.01-.008.228-.066.484-.128l.465-.113.06.259c.11.47.173.977.211 1.67l.038.685H22.288zM1.392 8.827a3.732 3.732 0 01-.468-.124c-.09-.09.766-2.45.889-2.45.119 0 .904.423.88.475-.357.785-.523 1.21-.648 1.66-.084.302-.165.547-.18.545-.016-.003-.229-.05-.473-.106zm20.264-1.244a14.26 14.26 0 00-.783-1.56 3.105 3.105 0 01-.194-.341c0-.015.183-.147.408-.294.473-.31.394-.35.847.428.237.407.82 1.668.771 1.668-.008 0-.226.076-.485.169l-.47.168zM2.76 5.568c-.211-.13-.384-.261-.384-.292.001-.108.746-1.045 1.206-1.516l.463-.475.356.347.356.348-.4.421c-.22.232-.569.643-.774.914-.205.27-.388.49-.406.49-.019 0-.206-.107-.417-.237zm17.002-1a11.12 11.12 0 00-1.312-1.194l-.154-.112.258-.335c.142-.185.279-.372.304-.416.037-.064.11-.03.351.166.391.315 1.391 1.268 1.53 1.457l.105.145-.39.315-.39.316zM5.188 2.978c-.155-.203-.272-.385-.258-.406.104-.157 1.458-.993 1.967-1.215l.29-.126.201.456.201.457-.546.28c-.6.309-.95.52-1.265.762-.114.088-.23.16-.257.16-.028 0-.177-.166-.333-.368zm11.768-.535a11.83 11.83 0 00-1.052-.476 6.61 6.61 0 01-.584-.244c-.044-.036.222-.95.276-.95.163 0 1.776.708 2.196.963l.212.129-.244.404a6.448 6.448 0 01-.268.424c-.013.01-.255-.102-.536-.25zm-8.469-.727l-.167-.48-.138-.403.38-.114c.367-.11 1.495-.347 1.981-.415l.238-.034.03.238.064.503c.019.146.013.266-.012.266-.301.002-1.888.338-2.248.477-.06.023-.11.009-.128-.038zm5.115-.359c-.219-.04-.698-.09-1.066-.112l-.668-.04V.2l.697.04c.614.034 1.89.209 1.948.266.02.02-.018.199-.152.73-.06.24-.086.245-.759.122z"
            ></path>
        </SvgIcon>
    );
};

export default SignalIcon;