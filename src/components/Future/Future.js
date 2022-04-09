import React from 'react';
import Section from '../Section'
import TextContent from '../TextContent'
import List from '../List'

export default function Addendum() {
    return (
        <Section>
          <TextContent headline='Außerdem...'>
            Nebenher suche ich hier und da nach neuen Hobbies oder probiere neue Technologien aus. Hier ein paar Dinge, mit denen ich mich aktuell beschäftige:
          </TextContent>
          <List items={['Blog schreiben', 'Meetup für Frontend Developers', 'Remix testen', 'Svelte testen']} />
        </Section>
    )
}