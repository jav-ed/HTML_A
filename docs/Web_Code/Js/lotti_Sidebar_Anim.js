/* ========================================================================== */
/* ============================= complete_Check ============================= */
/* ========================================================================== */
function complete_Check(second_Anim){
    
    console.log("I was found complete_Check ")

    var rocket_Name = "rocket_Orange.lottie";
    var aircraft_Name = "airplane.lottie";

    player.addEventListener('complete',()=> {

        // first animation has completed
        if(!second_Anim){

            console.log("first animation has completed");

            // the animation must be stopped, such that it can be played again
            //player.currentState  = playing --> stop it, to rerun it
            player.stop();
        
            // load the second animation -> can be played when eventListender('ready') is called

            var path_0 = `../../../7_Animation/${rocket_Name}`;
            var path_1 = `../../7_Animation/${rocket_Name}`;
            var path_2 = `/Data/7_Animation/${rocket_Name}`;

            // check which file path is valid, use the valid one and load the player
            loadFileWithFallback(path_0, path_1, path_2, player);

            // let the system know second anim is loaded
            second_Anim = true;

            // playing the second animation directy does not make sense, since it takes some time to fetch the data from the net, then it must be loaded (postprocessed) --> it takes some time till the animation ready to be played --> use ready ewventListener
            // play the second anim
            // player.play();
            // console.log(`the current state is: ${player.currentState}`)
            }

        // second animation has completed
        else {
            
            console.log("second animation completed");

            // load back the first animation
            var path_0 = `../../../7_Animation/${aircraft_Name}`;
            var path_1 = `../../7_Animation/${aircraft_Name}`;
            var path_2 = `Data/7_Animation/${aircraft_Name}`;

            // check which file path is valid, use the valid one and load the player
            loadFileWithFallback(path_0, path_1, path_2, player);

            // let the system know first anim is loaded
            second_Anim = false;

            // stop the animation, such that the first animation can be played again if anim is clicked on
            player.stop();

            } 
    });



    // Add an event listener for the 'ready' event --> is executed when player.load(.lotti or .json-file) compledted and ready for beeing played
    player.addEventListener('ready', () => {

        // play the second animation when it's loaded and ready for it
        if (second_Anim){
        
            player.play();
        
        }
    });
}


/* ========================================================================== */
/* ========================== loadFileWithFallback ========================== */
/* ========================================================================== */
function loadFileWithFallback(  primaryPath, 
                                fallbackPath,
                                path_2,
                                player) {


    // gets two paths --> check which one is valid. Use the valid one to load the player
    fetch(primaryPath)
      .then((response) => {

        // no reading here, only checking metadta
        if (response.ok) {

          // If the primary file is found, use it
          console.log("returning: ", primaryPath);
          player.load(primaryPath);

        // also possible to read the content directy
        //   return response.text();
        } 
        
        else {
          // If the primary file is not found, try the fallback path
          return fetch(fallbackPath).then((fallbackResponse) => {
            if (fallbackResponse.ok) {
            
            console.log("returning: ", fallbackPath);
            player.load(fallbackPath);

            } 
            
            else {
              // If both primary and fallback files not found, try path_2
              return fetch(path_2).then((path2Response) => {
                if (path2Response.ok) {

                  console.log("returning: ", path_2);
                  player.load(path_2);

                }

                else {
                  throw new Error('Primary, fallback, and path_2 files not found');
                }

              });
            }


          });





        }
      })

  }

  
