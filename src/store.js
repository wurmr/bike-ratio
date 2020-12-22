import { writable } from './localStorageStore'
import { derived } from 'svelte/store'
import { v4 as uuidv4 } from 'uuid'

const colors = ['#6DB9AE', '#F2EBB9', '#CE5F55', '#DC2951']
const gearSets = writable('gearSets', [])
export const tireSize = writable('tireSize', 29)

export const gearSetsStore = {
  subscribe: gearSets.subscribe,
  set: gearSets.set,
  reset: () => gearSets.set([]),
  addGearSet: () =>
    gearSets.update((gs) => [
      ...gs,
      {
        color: colors[gs.length],
        crankset: [],
        cassette: [],
        tireSize: 29,
      },
    ]),
  addCranksetCog: (gearSetId) =>
    gearSets.update((gs) => {
      const cogs = gs[gearSetId].crankset
      const newGs = [...gs]
      newGs[gearSetId] = {
        ...newGs[gearSetId],
        crankset: [...cogs, { id: uuidv4(), teeth: 30 }],
      }
      return newGs
    }),
  addCassetteCog: (gearSetId) =>
    gearSets.update((gs) => {
      const cogs = gs[gearSetId].cassette
      const newGs = [...gs]
      newGs[gearSetId] = {
        ...newGs[gearSetId],
        cassette: [
          ...cogs,
          { id: uuidv4(), teeth: cogs[cogs.length - 1]?.teeth + 2 },
        ],
      }
      return newGs
    }),
}

const calculateRatios = (gearSets) => {
  return gearSets
    .flatMap((set) =>
      [...set.crankset]
        .sort((a, b) => a.teeth - b.teeth)
        .flatMap(({ teeth: crankTeeth, id: crankID }, crankIndex) =>
          [...set.cassette]
            .sort((a, b) => b.teeth - a.teeth)
            .map(({ teeth: cogTeeth, id: cogId }, cassetteIndex) => ({
              color: set.color,
              tireSize: set.tireSize,
              gearInches:
                Math.round((crankTeeth / cogTeeth) * set.tireSize * 100, 2) /
                100,
              id: `${crankID}.${cogId}`,
              display: `${crankIndex + 1} - ${cassetteIndex + 1}`,
            }))
        )
    )
    .sort((a, b) => a.gearInches - b.gearInches)
}

export const ratios = derived(
  gearSetsStore,
  ($gearSetsStore) => calculateRatios($gearSetsStore),
  []
)
