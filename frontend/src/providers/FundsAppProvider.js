import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Loader } from 'components/Generic/Loader/Loader.styles';
import ErrorMessage from 'components/Generic/ErrorMessage/ErrorMessage';
import PropTypes from 'prop-types';

export const FundsAppContext = React.createContext({
  applicationState: [],
  filterFunds: () => {},
});

const FundsAppProvider = ({ children }) => {
  const [loadingState, setLoadingState] = useState({
    isLoading: true,
    isError: false,
  });
  const [APIData, setAPIData] = useState([]);
  //set state for funds data and data for options select filters
  const [applicationState, setApplicationState] = useState({
    fundsData: [],
    regions: [],
    types: [],
    currencies: [],
  });

  //get data from API
  useEffect(() => {
    axios
      .get('http://0.0.0.0:3000/')
      .then((response) => {
        setAPIData(response.data);
        setLoadingState({
          ...loadingState,
          isLoading: false,
        });
      })
      .catch(() => {
        setLoadingState({
          ...loadingState,
          isLoading: false,
          isError: true,
        });
      });
  }, []);

  //group data by fund name
  const groupedDataByFundName = useMemo(
    () =>
      Object.entries(
        APIData.reduce((groups, item) => {
          if (item.fundName && item.name) {
            const group = groups[item.fundName] || [];
            group.push(item);
            groups[item.fundName] = group;
            return groups;
          }
        }, {})
      ),
    [APIData]
  );

  //set application state
  useEffect(() => {
    const regions = [...new Set(APIData.map((item) => item.region))];
    const types = [...new Set(APIData.map((item) => item.type))];
    const currencies = [...new Set(APIData.map((item) => item.currency))];

    setApplicationState({
      fundsData: groupedDataByFundName,
      regions,
      types,
      currencies,
    });
  }, [APIData]);

  //filter funds by region, currency, type and search term
  const filterFunds = (filterValues) => {
    const selectFilters = {
      ...(filterValues.region === 'All' ? {} : { region: filterValues.region }),
      ...(filterValues.currency === 'All'
        ? {}
        : { currency: filterValues.currency }),
      ...(filterValues.type === 'All' ? {} : { type: filterValues.type }),
    };

    const filteredData = groupedDataByFundName.map(([fundName, data]) => [
      fundName,
      data.filter((fund) => {
        return (
          Object.keys(selectFilters).every((filter) => {
            return selectFilters[filter] === fund[filter];
          }) &&
          (fund.fundName
            .toLowerCase()
            .includes(filterValues.searchTerm.toLowerCase()) ||
            fund.name
              .toLowerCase()
              .includes(filterValues.searchTerm.toLowerCase()))
        );
      }),
    ]);

    setApplicationState({
      ...applicationState,
      fundsData: filteredData,
    });
  };

  if (loadingState.isLoading) {
    return <Loader />;
  }

  if (loadingState.isError) {
    return (
      <ErrorMessage>
        <p>Sorry, we could not load funds for you</p>
      </ErrorMessage>
    );
  }

  return (
    <FundsAppContext.Provider
      value={{
        applicationState,
        filterFunds,
      }}
    >
      {children}
    </FundsAppContext.Provider>
  );
};

FundsAppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FundsAppProvider;
