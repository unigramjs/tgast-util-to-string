import type { Nodes } from 'tgast'

/**
 * Get plain text from a tgast node.
 *
 * @param node - The tgast node to read text from.
 * @returns The combined text of all text nodes.
 */
export function getText(tree: Nodes): string {
	const parts: string[] = []
	const stack: Nodes[] = [tree]

	while (stack.length) {
		const node = stack.pop()!

		if ('value' in node) parts.push(node.value)

		if ('children' in node) {
			const length = node.children.length
			for (let i = length - 1; i >= 0; i--) stack.push(node.children[i])
		}
	}

	return parts.join('')
}
