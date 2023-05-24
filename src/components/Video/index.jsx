import React from "react";
import "./styled.css";

const Video = ({src,question}) => {
  
  return (
    <>
     <div className="parent-video">
      <video width="450" height="350" controls>
        <source
          src={src}
          type="video/mp4"
        />
      </video>
      <div>
        <h6 className="question">{question}</h6>
        <div className="d-flex gap-3">
          <button type="button" className="btn btn-primary">
            Ajouter un commentaire
          </button>
          <button type="button" className="btn btn-secondary">
            Voir le commentaire
          </button>
        </div>
        <div>
          <div className="form-ajout">
            <form>
              <div className="mb-3 mt-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="commentaire"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="mt-3"> 
          <p>Les commentaires</p>
        </div>
        <div className="commentaire mt-3">

            <ol>
                <li>Bien reponndu </li>
            </ol>
            
        </div>
      </div>
    </div>
    
    <div className="w-100 mt-3">
        <hr />
    </div>
    </>
   
  );
};

export default Video;
