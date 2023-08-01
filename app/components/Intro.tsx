

const Intro = () => {

  const text = `       Welcome to our training session.

  I'm excited to work with you and help you achieve your fitness goals. Let's push ourselves and make progress together. Remember, consistency and dedication will lead you to success.

  Let's get started and have a great workout today`
  return (
    <div className="w-full h-fit px-10 py-20 flex justify-center items-center">
        <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {text}
        </h2>
    </div>
  )
}

export default Intro