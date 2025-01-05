import { SliceSimulator, SliceSimulatorParams, getSlices } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "../../slices";

export default async function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const resolvedState = await (await searchParams).state; // Ensure it's resolved
  const slices = await getSlices(resolvedState); // Ensure slices are resolved

  return (
    <SliceSimulator>
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
