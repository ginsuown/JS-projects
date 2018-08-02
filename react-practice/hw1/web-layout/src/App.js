import React, { Component } from "react";
import MyHeader from "./components/header";
import MyFooter from "./components/footer";
import MyContent from "./components/content";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader text="HEADER" />
        <MyContent
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in aliquam dolor. Aenean ipsum tellus, faucibus eget quam et, ultricies tristique sem. Sed imperdiet facilisis orci et sodales. Cras maximus nulla elit, eget eleifend eros porttitor nec. Duis hendrerit nisi urna, ac dictum enim blandit eget. Quisque molestie tempus libero sit amet pharetra. Donec a magna orci. Suspendisse sapien ligula, maximus nec tincidunt nec, pellentesque in lectus. Integer arcu nisi, tincidunt eu felis sit amet, mattis pretium nulla. Aliquam nunc tellus, ornare vitae tempus volutpat, dapibus a enim. Vivamus id orci scelerisque, finibus purus ac, mollis sem. Ut leo lacus, volutpat at augue eget, luctus malesuada eros. Nullam consequat semper sapien consectetur vestibulum. Maecenas venenatis est eu elit pretium maximus. Fusce tincidunt leo tincidunt, facilisis purus vel, ultricies turpis. Suspendisse maximus magna vitae magna suscipit, aliquet consequat dolor tempor.

Duis suscipit lacus vitae leo scelerisque, ut dictum turpis ultricies. Etiam vehicula sit amet arcu ut porttitor. Duis dapibus finibus faucibus. Nam auctor sit amet tortor eget rutrum. Nullam ac magna urna. Maecenas cursus odio sit amet risus mollis, vel dictum mauris sollicitudin. In euismod laoreet justo, in ornare arcu viverra at. Pellentesque non blandit urna. Nullam sed vehicula sapien, non scelerisque felis. Maecenas dapibus ligula est, eget condimentum mi ullamcorper a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin orci neque, egestas id aliquam at, mollis at enim. Nunc condimentum pellentesque nisi, vitae volutpat justo aliquet sed. Vestibulum arcu massa, sollicitudin eu volutpat nec, dictum vel tellus. Sed ut eleifend nibh, vel laoreet massa. Nulla ac fringilla lectus, id imperdiet nulla.

Curabitur pharetra lectus sit amet leo faucibus pharetra. Proin ut metus sed est mollis fermentum. Proin ullamcorper, est quis ultrices iaculis, leo risus scelerisque velit, eu elementum risus leo sit amet lacus. Cras eget maximus ligula. Morbi vestibulum nulla ac eros dignissim viverra. Proin sodales justo quam, tincidunt commodo velit ultricies vel. In sapien justo, molestie eu congue non, varius ut erat. Aliquam eget risus eget sem lacinia ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum pulvinar commodo. Pellentesque et nunc a quam pharetra hendrerit a at massa.

Curabitur ante urna, gravida at odio in, condimentum pharetra dolor. Ut elementum sodales fringilla. Aenean eu dolor ultrices mi pellentesque pulvinar id et ex. Praesent vel feugiat mi. Quisque sed est sodales, semper nunc sit amet, venenatis nisi. Etiam tincidunt tortor ac aliquam tempor. Vivamus aliquam dapibus nisi. Suspendisse dictum augue eget neque ultricies lacinia.

Nam efficitur elit enim, vel dignissim urna hendrerit nec. Nullam consectetur mattis elit non lacinia. Aenean ex velit, accumsan ac aliquam eget, aliquet a sapien. Proin pharetra ut leo vitae ullamcorper. Integer nibh metus, facilisis ac fermentum eget, interdum quis mi. Nulla maximus fringilla urna non tincidunt. Sed vestibulum, libero pulvinar aliquet tempor, lectus neque pulvinar dui, a facilisis sem justo at eros. Phasellus sit amet ultricies orci, id blandit tortor. Ut et dignissim purus, ut dapibus quam. Mauris ornare sagittis risus, at rutrum leo pulvinar sit amet."
        />
        <MyFooter text="FOOTER" />
      </div>
    );
  }
}

export default App;
