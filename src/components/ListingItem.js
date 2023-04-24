import React from "react";
import { Link } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";
import "../styles/listingitem.css";
const ListingItem = ({ listing, id, onDelete ,onEdit}) => {
  return (
    <>
      <div className="card-item-parent d-flex align-items-center justify-content-center">
        <div className="item-card category-link mb-2 w-75" >
          <Link to={`/category/${listing.type}/${id}`}>
            <div className="row p-2">
              <div className="col-md-5 item-card-continer1">
                <img
                  src={listing.imgUrl[0]}
                  className="img-thumbnail"
                  alt={listing.name}
                  height={200}
                  width={300}
                />
              </div>
              <div className="col-md-5 item-card-continer2">
              <h2>{listing.name}</h2>
                <p>{listing.location}</p>
                
                <p>
                  RS :{" "}
                  {listing.Offer
                    ? listing.discountedPrice
                    : listing.regularPrice}{" "}
                  {listing.type === "rent" && " / Month"}
                </p>
                <p>
                  <FaBed /> &nbsp;
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} Bedrooms`
                    : "1 Bedreoom"}
                </p>
                <p>
                  <FaBath /> &nbsp;
                  {listing.bathrooms > 1
                    ? `${listing.batrooms} Bathrooms`
                    : "1 Bathroom"}
                </p>
                </div>
            </div>
          </Link>
          <div className="m-2 p-3">
                {onDelete && (
                  <button className="btn btn-danger" onClick={()=>{onDelete(listing.id,listing.name)}}>Delete Listing</button>
                )}

                {onEdit && (
                  <button className="btn btn-info ms-3" onClick={()=>{onEdit(listing.id,listing.name)}}>Edit Listing</button>
                )}
              </div>
            </div>
            </div>
          
    </>
  );
};

export default ListingItem;

