import React from 'react';
import '../App.css';


class FavoriteMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }

    
      
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    
    submitForm(e) {
        e.preventDefault();

        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          };
    
        const url = "https://post-a-form.herokuapp.com/api/movies/";

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                alert(res.error);
                } else {
                alert(`Film ajouté avec l'ID ${res.id}!`);
                }
            }).catch(e => {
                console.error(e);
                alert("Erreur lors de l'ajout d'un film");
            });

    };

    render() {
        return (
        <div className="FormEmployee">
        <h1>Your favorite movie</h1>
        
        <form onSubmit={this.submitForm}>
            <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
                <label htmlFor="title">Movie name</label>
                <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
                />
            </div>
        
            <div className="form-data">
                <label htmlFor="poster">Poster url</label>
                <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
                />
            </div>
        
            <div className="form-data">
                <label htmlFor="comment">comment</label>
                <textarea
                type="comment"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
                />
            </div>
            <hr />
            <div className="form-data">
                <input type="submit" value="Envoyer" />
            </div>
            </fieldset>
        </form>
        </div>
        )
    }
      
}

export default FavoriteMovie
