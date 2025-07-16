
type PatientDetailsItemProps = {
    label: string
    data: string
}

const PatientDetailsItem = ({label, data}: PatientDetailsItemProps) => {
  return (
    <p className="font-bold mb-3 uppercase text-gray-700">
            {label} {''}
        <span className="font-normal normal-case">{data}</span>
    </p>
  )
}

export default PatientDetailsItem
