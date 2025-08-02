import type { Blockquote } from 'tgast'
import { it } from 'vitest'
import { toString } from '../src/to-string.ts'

const sample: Blockquote = {
  type: 'blockquote',
  children: [
    { type: 'text', value: 'Hello ' },
    {
      type: 'bold',
      children: [
        { type: 'text', value: 'bold' },
      ],
    },
    { type: 'text', value: ' ' },
    {
      type: 'spoiler',
      children: [
        {
          type: 'strikethrough',
          children: [
            { type: 'text', value: 'old' },
          ],
        },
      ],
    },
    { type: 'text', value: ' ' },
    { type: 'code', value: 'code' },
    { type: 'text', value: ' world!' },
  ],
}

const expected = 'Hello bold old code world!'

it.concurrent('should output the correct plain text', (t) => {
  const actual = toString(sample)

  t.expect(actual).toStrictEqual(expected)
})
