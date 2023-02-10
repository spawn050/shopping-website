import NewInLabelContainer from "./newInLabelContainer";

const NewInContainer = ({gender}) => {
    return(
        <div className="new-in-container">
            <NewInLabelContainer gender={gender} />
        </div>
    );
};

export default NewInContainer;