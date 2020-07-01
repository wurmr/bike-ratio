import { writable } from './localStorageStore'
import { derived } from 'svelte/store'

const colors = ['blue', 'red', 'orange', 'green']
const gearSets = writable('gearSets', [])

export const tireSize = writable('tireSize', 29)
export const gearSetsStore = {
  subscribe: gearSets.subscribe,
  set: gearSets.set,
  gearSets: gearSets.update,
  reset: () => gearSets.set([]),
  addGearSet: () =>
    gearSets.update((gs) => [
      ...gs,
      {
        color: colors[gs.length],
        crankset: [],
        cassette: [],
      },
    ]),
  addCranksetCog: (gearSetId) =>
    gearSets.update((gs) => {
      const cogs = gs[gearSetId].crankset
      const newGs = [...gs]
      newGs[gearSetId] = {
        ...newGs[gearSetId],
        crankset: [...cogs, 30],
      }
      return newGs
    }),
  addCassetteCog: (gearSetId) =>
    gearSets.update((gs) => {
      const cogs = gs[gearSetId].cassette
      const newGs = [...gs]
      newGs[gearSetId] = {
        ...newGs[gearSetId],
        cassette: [...cogs, cogs[cogs.length - 1] + 2],
      }
      return newGs
    }),
}

export const ratios = derived(gearSets, ($gearSets) =>
  $gearSets
    .flatMap((set) =>
      set.crankset.flatMap((chainring) =>
        set.cassette.map((cog) => ({
          value: chainring / cog,
          color: set.color,
        }))
      )
    )
    .sort((a, b) => a.value - b.value)
)
