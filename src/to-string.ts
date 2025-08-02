import type { Nodes } from 'tgast'

/**
 * Get plain text from a tgast node.
 *
 * @param node - The tgast node to read text from.
 * @returns The combined text of all text nodes.
 */
export function toString(node: Nodes): string {
  let result = ''

  walk(node, (n) => {
    if ('value' in n)
      result += n.value
  })

  return result
}

/**
 * Walks a node tree and runs a {@link callback} on each node.
 *
 * @param tree - The root node or subtree to visit.
 * @param callback - Function to call for each node.
 */
function walk(tree: Nodes, callback: (node: Nodes) => void): void {
  callback(tree)

  if ('children' in tree) {
    for (const node of tree.children) walk(node, callback)
  }
}
