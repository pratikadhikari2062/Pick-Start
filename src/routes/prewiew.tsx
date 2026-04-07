import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/prewiew')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Prevw"!</div>
}
