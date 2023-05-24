import React from "react";
import "./styled.css";

const Video = () => {
  return (
    <>
     <div className="parent-video">
      <video width="450" height="350" controls>
        <source
          src="https://dashboard.knockri.com/assets?f=645434.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <h6 className="question">What is your name ?</h6>
        <div className="d-flex gap-3">
          <button type="button" class="btn btn-primary">
            Ajouter un commentaire
          </button>
          <button type="button" class="btn btn-secondary">
            Voir le commentaire
          </button>
        </div>
        <div>
          <div className="form-ajout">
            <form>
              <div class="mb-3 mt-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="commentaire"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
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
