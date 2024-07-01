
const AboutCourse = ({about}) => {
  return (
    <div className='bg-metricGray/50 w-full h-full row-span-4 rounded-3xl p-4 flex flex-col gap-3'>
      <div className="tag border border-metricGray3 w-20 rounded-full h-7 flex justify-center items-center text-[12px]" >
        درباره دوره
      </div>
      <p className="text-sm text-justify" >
        {about}
      </p>
    </div>
  )
}

export default AboutCourse