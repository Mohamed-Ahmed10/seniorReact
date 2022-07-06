const PropsTraining = (props) => {
    const title = props.title;
    const desc = props.desc;
    return ( 
        <div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <hr />
        </div>
    );
}

export default PropsTraining;