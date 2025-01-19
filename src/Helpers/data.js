import {formatDistanceToNowStrict} from 'date-fns'


export  const formatDateToNow =(date)=>{
   return formatDistanceToNowStrict(new Date(date), { addSuffix: true })
}
