

const Video1 = () => {
  return (
    <div className="w-full h-screen relative video1">
                <div className="absolute top-0 left-0 w-full h-screen bg-black/70 flex justify-center items-center">
                    <h3 className="text-white uppercase font-semibold">
                        work hard, play hard
                    </h3>
                </div>
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src='../trainingVideo1.mp4'/>
              </video>
              
    </div>
  )
}

export default Video1