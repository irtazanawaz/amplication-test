import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: IntNullableFilter;
};
