import { useContext, useState, useCallback, useEffect } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DataVisualization from './data-visualization'

type ModelOutputProps = {
  configuration: {
    city: string
    patology: string
  }
}

export default function Output({ configuration }: ModelOutputProps) {
  const [output, setOutput] = useState(['runId'])

  return (
    <Tabs defaultValue="results" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger className="w-auto" value="results">
          Results
        </TabsTrigger>
        <TabsTrigger
          className="w-auto cursor-not-allowed disabled:hover:cursor-not-allowed"
          value="city"
          disabled
        >
          City
        </TabsTrigger>
        <TabsTrigger
          className="w-auto cursor-not-allowed disabled:hover:cursor-not-allowed"
          value="patology"
          disabled
        >
          Patology
        </TabsTrigger>
        {/* <TabsTrigger className="w-auto" value="logs">
          Logs
        </TabsTrigger> */}
      </TabsList>
      <TabsContent value="results" className="flex flex-col gap-y-4">
        {/* todo: properly calculate accuracy */}
        {/* todo: use papaparse to parse the last line of both csvs in order to plot the real value here */}
        {/* <div className="flex flex-col gap-4 md:flex-row w-full">
                  <section className="dark:border-muted gap-y-2 bg-background dark:bg-muted/50 rounded py-6 px-9 border-2 w-ful flex flex-col md:justify-center md:items-start relative">
                    <p className="text-sm text-pandemica-yellow">Acurácia</p>
                    <span className="text-7xl font-sans-heading">30%</span>
                  </section>
                  <section className="dark:border-muted gap-y-2 bg-background dark:bg-muted/50 rounded py-6 px-9 border-2 w-ful flex flex-col md:justify-center md:items-start relative">
                    <p className="text-sm tracking-tight text-pandemica-yellow">Casos</p>
                    <div className="grid grid-cols-2 grid-flow-rows md:grid-cols2 md:grid-flow-col gap-4">
                      <div>
                        <span className="text-sm font-semibold tracking-tight">Real</span>
                        <p className="text-muted-foreground text-sm tracking-tight">209.500</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold tracking-tight">Simulado</span>
                        <p className="text-muted-foreground text-sm tracking-tight">724.645</p>
                      </div>
                    </div>
                  </section>
                  <section className="dark:border-muted gap-y-2 bg-background dark:bg-muted/50 rounded py-6 px-9 border-2 w-ful flex flex-col md:justify-center md:items-start relative">
                    <p className="text-sm tracking-tight text-pandemica-yellow">Mortes</p>
                    <div className="grid grid-cols-2 grid-flow-rows md:grid-cols-2 md:grid-flow-col gap-4">
                      <div>
                        <span className="text-sm font-semibold tracking-tight">Real</span>
                        <p className="text-muted-foreground text-sm tracking-tight">5.360</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold tracking-tight">Simulado</span>
                        <p className="text-muted-foreground text-sm tracking-tight">19.313</p>
                      </div>
                    </div>
                  </section>
                </div> */}
        <div className="flex flex-col w-full mt-2 gap-y-4">
          <DataVisualization />
        </div>
      </TabsContent>
      {/* todo?: perhaps remove the tabs bellow and focus only on the charts */}
      {/* <TabsContent value="city">Dados da cidade em questão.</TabsContent>
      <TabsContent value="patology">Dados da patologia em questão.</TabsContent> */}
      {/* <TabsContent value="logs">
        <div className="bg-muted w-full rounded">
          <Textarea value={'A ser feito.'} readOnly />
        </div>
      </TabsContent> */}
    </Tabs>
  )
}
