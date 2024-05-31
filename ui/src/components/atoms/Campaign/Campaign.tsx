import { ICampaignProps } from "./campaign.types"
import { FC } from "react"
const camapignType = ["Personal","Cause","Organism","Donation","Reward","EquityC"]

const Campaign: FC<ICampaignProps> = (props) => {
  const  {campaign} = props
  return (
    <div className="flex flex-col border border-gray-200 m-1 rounded-lg shadow-md">
        <span>Campaign Type : {camapignType[campaign.ctype]}</span>
        <span>Owner : {campaign.owner}</span>
        <span>Title: {campaign.title}</span>
        <span>Description: {campaign.description}</span>
        <span>Goal: {campaign.goal}</span>
        <span>Current: {campaign.current}</span>
        <span>Begin: {new Date(campaign.begin * 1000).toString()}</span>
        <span>Deadline: {new Date(campaign.deadline * 1000).toString()}</span>
        <span>Beneficiary: {campaign.beneficiary}</span>
    </div>
  )
}

export default Campaign