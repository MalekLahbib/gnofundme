import { ICampaignProps } from "./campaign.types"
import { FC } from "react"

const Campaign: FC<ICampaignProps> = (props) => {
  const  {campaign} = props
  return (
    <div className="flex flex-col border border-gray-200 m-1 rounded-lg shadow-md">
        <span>Title: {campaign.title}</span>
        <span>Description: {campaign.description}</span>
        <span>Goal: {campaign.goal}</span>
        <span>Current: {campaign.current}</span>
        <span>Begin: {new Date(campaign.begin * 10).toString()}</span>
        <span>Deadline: {new Date(campaign.deadline * 10).toString()}</span>
        <span>Beneficiary: {campaign.beneficiary}</span>
    </div>
  )
}

export default Campaign