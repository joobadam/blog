const Video2 = () => {
    return (
      <div className="w-full h-screen relative mt-5 video3">
                  <div className="absolute top-0 left-0 w-full h-screen bg-black/70 flex justify-center items-center ">
                      <h3 className="text-white uppercase font-semibold">
                      Pain is temporary, victory is forever.
                      </h3>
                  </div>
                  <video autoPlay muted loop className="w-full h-full object-cover">
                <source src='../trainingVideo3.mp4'/>
              </video>

      </div>
    )
  }
  
  export default Video2