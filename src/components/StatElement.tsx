interface MyProps {
    description: string;
    value: number;
    precision: number;
}

function StatElement(props: MyProps) {
    let valueString: string  = props.value.toString();
    if (props.value >= 1000) {
        switch (props.precision) {
            case 0:
                valueString = `${valueString.substring(0, valueString.length - 3)}K`;
                break;
            case 1:
                valueString = `${valueString.substring(0, valueString.length - 3)}.${valueString.substring(valueString.length - 2, 1)}K`;
                break;
            case 2:
                valueString = `${valueString.substring(0, valueString.length - 2)}.${valueString.substring(valueString.length - 1, 1)}K`;
                break;
            case 3:
                break;
            default:
                throw "Invalid value for precision in StatElement.";
                break;
        }
    }

    return (
        <div className="stat-element">
            <p className="stat-value">{valueString}</p>
            <p className="stat-description">{props.description}</p>
        </div>
    );
}

export default StatElement;