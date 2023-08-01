const Video3 = () => {
    return (
      <div className="w-full h-screen relative mt-5 video2">
                  <div className="absolute top-0 left-0 w-full h-screen bg-black/70 flex justify-center items-center ">
                      <h3 className="text-white uppercase font-semibold">
                      We'll do it together
                      </h3>
                  </div>
                  <video autoPlay muted loop className="w-full h-full object-cover">
                <source src='../trainingVideo2.mp4'/>
              </video>
      </div>
    )
  }
  
  export default Video3