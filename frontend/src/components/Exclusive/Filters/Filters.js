import React, { useContext, useEffect, useMemo } from 'react';
import { useFilter } from 'hooks/useFilters';
import debounce from 'lodash/debounce';
import { Input, Label, Select } from 'components/Generic/Inputs/Inputs.styles';
import { FundsAppContext } from 'providers/FundsAppProvider';
import {
  Filter,
  Wrapper,
  FiltersWrapper,
  ButtonWrapper,
} from './Filters.styles';
import { Container } from 'assets/styles/GlobalStyle';
import { Button } from 'components/Generic/Button/Button.styles';

const Filters = () => {
  const initialFilterState = {
    searchTerm: '',
    region: 'All',
    currency: 'All',
    type: 'All',
  };

  const { filterFunds, applicationState } = useContext(FundsAppContext);
  const { filterValues, handleInputChange, handleClearFilters } =
    useFilter(initialFilterState);

  useEffect(() => {
    filterFunds(filterValues);
  }, [filterValues]);

  const showClearButton =
    JSON.stringify(initialFilterState) !== JSON.stringify(filterValues);

  const debouncedChangeHandler = useMemo(
    () => debounce(handleInputChange, 250),
    []
  );

  return (
    <Wrapper>
      <Container>
        <FiltersWrapper as="form">
          <Filter>
            <Input
              name="searchTerm"
              type="search"
              placeholder="Start typing to search..."
              onChange={debouncedChangeHandler}
              defaultValue={filterValues.searchTerm}
              autoFocus
              key={filterValues.searchTerm ? 'notLoaded' : 'loaded'}
            />
          </Filter>
          <Filter>
            <Label htmlFor="currency">Currency</Label>
            <Select
              id="currency"
              name="currency"
              value={filterValues.currency}
              onChange={handleInputChange}
            >
              <option value="All">All</option>
              {applicationState.currencies.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </Select>
          </Filter>
          <Filter>
            <Label htmlFor="region">Region</Label>
            <Select
              id="region"
              name="region"
              value={filterValues.region}
              onChange={handleInputChange}
            >
              <option value="All">All</option>
              {applicationState.regions.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </Select>
          </Filter>
          <Filter>
            <Label htmlFor="type">Type</Label>
            <Select
              id="type"
              name="type"
              value={filterValues.type}
              onChange={handleInputChange}
            >
              <option value="All">All</option>
              {applicationState.types.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </Select>
          </Filter>
        </FiltersWrapper>
      </Container>
      <Container>
        <ButtonWrapper>
          {showClearButton && (
            <Button onClick={handleClearFilters}>Clear all filters</Button>
          )}
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default Filters;
