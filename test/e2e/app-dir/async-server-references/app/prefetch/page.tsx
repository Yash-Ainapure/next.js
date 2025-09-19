import { LinkAccordion } from '../../components/link-accordion'

export default async function Page() {
  return (
    <main id="use-cache">
      <h1>
        A page that links to another page which uses an async server reference
      </h1>
      <LinkAccordion href="/prefetch/target-page">
        /prefetch/target-page
      </LinkAccordion>
    </main>
  )
}
