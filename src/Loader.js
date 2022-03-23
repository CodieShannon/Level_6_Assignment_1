//Import StyleSheet
import './css/App.css';

//Import JSON
import JSON from './scripts/subjectFiles.json';

//Functions
function Loader(index)
{
    //Get and Format Subject File For HTML
    const subjectFile = JSON.map
    (
        (subject) =>
        {
            if(subject.id == index)
            {
                return(
                    <div key={subject.item} className="wrapper">
                    <div className="headerblock border">
                        <h1>Item #: {subject.item}</h1>
                        <h2>Object Class: {subject.class}</h2>
                    </div>
                    
                    {
                    subject.image === "data:," ? null :
                        <div className="imageblock border">
                            <img id="subject-image" src={subject.image} alt="Subject Image"/>
                        </div>
                    }

                    <div className="textblock border">
                        <article>
                            <h2>Special Containment Procedures:</h2>
                            <p>{subject.containment.replaceAll('<br>', '\n')}</p>
                        </article>
                    </div>

                    <div className="textblock border">
                        <article>
                            <h2>Description:</h2>
                            <p>{subject.description.replaceAll('<br>', '\n')}</p>
                        </article>
                    </div>
                </div>
                );
            }
        }
    )

    //Return Subject File
    return subjectFile;
}

//Export
export default Loader;