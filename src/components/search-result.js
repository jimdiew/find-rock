import React, { Component } from "react";
import ArtistCard from "./artist-card.js";

class SearchResult extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <ArtistCard
              img="https://www.rafabasa.com/wp-content/uploads/imagenes/web/iron_maiden/portadas/the_writing300.jpg"
              titulo="Iron Maiden"
            />
            <ArtistCard
              img="https://www.elportaldelmetal.com/files/imagecache/preview/dream_theater-black_clouds_y_silver_linings_deluxe_edition-frontal.jpg"
              titulo="Dream Theatre"
            />
            <ArtistCard
              img="https://www.elportaldelmetal.com/files/imagecache/preview/stonesour2.jpg"
              titulo="Stone Sour"
            />
            <ArtistCard
              img="https://http2.mlstatic.com/D_NQ_NP_817868-MLA31646794887_072019-O.webp"
              titulo="Disturbed"
            />
            <ArtistCard
              img="https://img.discogs.com/sMgHKTPQugzTW_S_W8FfAZzglOs=/fit-in/550x550/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12633517-1539013166-9583.jpeg.jpg"
              titulo="Poets of the Fallen"
            />
            <ArtistCard
              img="https://m.media-amazon.com/images/I/61tMXtTaGUL.jpg"
              titulo="Slipknot"
            />
          </div>
          <h1>{this.props.busqueda}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
