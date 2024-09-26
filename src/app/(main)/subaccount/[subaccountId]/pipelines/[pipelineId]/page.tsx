import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { db } from '@/lib/db'
import { getLanesWithTicketAndTags, getPipelineDetails, updateLanesOrder, updateTicketsOrder } from '@/lib/queries'
import { LaneDetail } from '@/lib/types'
import { redirect } from 'next/navigation'
import React from 'react'
import PipelineInfoBar from '../_components/pipeline-infobar'
import PipeLineSettings from '../_components/pipeline-settings'
import PipeLineView from '../_components/pipeline-view'

type Props = {
    params: {
        subaccountId: string
        pipelineId: string
    }
}

const PipeLinePage = async({params}: Props) => {
    const pipeLineDetails = await getPipelineDetails(params.pipelineId)

    if (!pipeLineDetails)
    return redirect(`/subaccount/${params.subaccountId}/pipelines`)

    const pipelines = await db.pipeline.findMany({
        where: { subAccountId: params.subaccountId },
      })    

      const lanes = (await getLanesWithTicketAndTags(
        params.pipelineId
      )) as LaneDetail[]

  return (
    <Tabs
    defaultValue="view"
    className='w-full'
    >

        <TabsList className='bg-transparent border-b-2 h-16 w-full justify-between mb-4'>
        <PipelineInfoBar
          pipelineId={params.pipelineId}
          subaccountId={params.subaccountId}
          pipelines={pipelines}
        />
        <div>
          <TabsTrigger value="view">
            PipeLine View
          </TabsTrigger>

          <TabsTrigger value="settings">
            settings
          </TabsTrigger>
        </div>
        </TabsList>
        <TabsContent value='view'>
          <PipeLineView
          lanes={lanes}
          pipelineDetails={pipeLineDetails}
          pipelineId={params.pipelineId}
          subaccountId={params.subaccountId}
          updateLanesOrder={updateLanesOrder}
          updateTicketsOrder={updateTicketsOrder}
          />
        </TabsContent>
        <TabsContent value='settings'>
          <PipeLineSettings 
          pipelineId={params.pipelineId}
          pipelines={pipelines}
          subaccountId={params.subaccountId}
          />
        </TabsContent>
    </Tabs>
  )
}

export default PipeLinePage