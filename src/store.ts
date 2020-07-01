import { writable, derived } from 'svelte/store'

export const gearSets = writable([])
export const ratios = derived(gearSets, ($gearSets) =>
  $gearSets
    .flatMap((set) => set.ratios.map((value) => ({ value, color: set.color })))
    .sort((a, b) => a.value - b.value)
)
