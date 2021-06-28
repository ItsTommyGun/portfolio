import React from 'react';
import Section from '../Section'
import TextContent from '../TextContent'
import List from '../List'

export default function Future() {
    return (
        <Section>
          <TextContent headline='Zukunft'>
            So wichtig es auch sein mag, sich auf bestimmte Technologien zu fokussieren, so wichtig ist es auch spannende, neue Entwicklungen zu verfolgen. Hier ist eine Auswahl der Themen, die mich interessieren.
          </TextContent>
          <List items={['Snowpack', 'Vue3', 'Svelte', 'Angular']} />
        </Section>
    )
}