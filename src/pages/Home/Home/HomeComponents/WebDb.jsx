

const WebDb = ({jobs}) => {
    const {category,jobTitle} = jobs;
    return (
        <div>
            <h2>{category}</h2>
            <h2>{jobTitle}</h2>
        </div>
    );
};

export default WebDb;