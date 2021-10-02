import { DatapageCountries } from "./Datapage_Countries";
import { DatapageStatuses } from "./Datapage_Statuses";

export const DatapageView = () => ({
  gravity: 8,
  cells: [
    { id: "countries", cols: [DatapageCountries()] },
    { id: "statuses", cols: [DatapageStatuses()] },
  ],
});
