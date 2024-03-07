/* Write your CSS here */
.Eventitem_container {
  padding: 0px;
  font-family: 'Roboto';
  margin: 15px;
}
.Eventitem_button {
  background-color: transparent;
  text-align: start;
  padding: 0px;
  border: none;
  cursor: pointer;
}
.Eventitem_image {
  width: 200px;
  border-radius: 10px;
}
@media screen and (min-width: 1200px) {
  .Eventitem_container {
    width: 45%;
  }
  .Eventitem_image {
    width: 100%;
  }
}
.Eventitem_name {
  color: #f8fafc;
  margin-bottom: 0px;
  font-size: 19px;
  font-weight: bold;
}
.Eventitem_location {
  color: #f8fafc;
  margin: 3px;
  font-size: 16px;
}
@media screen and (min-width: 1200px) {
  .Eventitem_name {
    font-size: 25px;
  }
  .Eventitem_location {
    font-size: 18px;
  }
}
