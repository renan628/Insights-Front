import { useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { createContainer, useContainer } from 'unstated-next';
import { useHistory } from 'react-router-dom';
import api from '../service/api';
import {
  GetInsightsSendType,
  GetInsightsType,
  Insigths,
  PostInsightsSendType,
} from './types';

function useInsightContainer(): any {
  const [token, setToken] = useState<string>('');
  const [insights, setInsights] = useState<Insigths[]>();
  const [latestInsight, setLatestInsight] = useState<string>();
  const { data, isFetched, refetch } = useQuery(['insights'], async () => {
    return api.get<GetInsightsType>('/api/v1/cards/', {
      params: { limit: 5, skip: 0 },
    });
  });

  useMemo(() => {
    if (typeof data?.data !== 'undefined') {
      const values = data?.data;
      setInsights(data?.data.results);
      setLatestInsight(() => (data?.data?.next ? data?.data?.next : '0'));
    }
  }, [data]);

  const getInsightsMutantion = useMutation(
    ['getInsights'],
    () =>
      api.get<GetInsightsType>('/api/v1/cards/', {
        params: { limit: 5, skip: latestInsight },
      }),
    {
      onSuccess: (date) => {
        const latestInsigths = insights || [];
        const newInsights = latestInsigths.concat(date.data.results);
        if (insights) setInsights(newInsights);
      },
    }
  );

  const searchInsightsMutantion = useMutation(
    ['getInsights'],
    (props: GetInsightsSendType) =>
      api.get<GetInsightsType>('/api/v1/cards/', { params: props }),
    {
      onSuccess: (date) => {
        setInsights(date.data.results);
      },
    }
  );

  const postInsightsMutantion = useMutation(
    ['getInsights'],
    (props: PostInsightsSendType) =>
      api.post<GetInsightsType>('/api/v1/cards/', props),
    {
      onSuccess: (date, props) => {
        const latestInsigths = insights || [];
        let newInsights = [props];
        newInsights = newInsights.concat(latestInsigths);
        setInsights(newInsights);
      },
    }
  );

  const getInsights = async () => {
    return getInsightsMutantion.mutateAsync();
  };

  const postInsights = async (insigth: string, tag: string) => {
    return postInsightsMutantion.mutateAsync({
      texto: insigth,
      tags: [
        {
          nome: tag,
        },
      ],
    });
  };

  const searchInsights = async (search: string) => {
    return searchInsightsMutantion.mutateAsync({
      limit: 20,
      skip: 0,
      tags: [search],
    });
  };

  return {
    insights,
    getInsights,
    postInsights,
    setInsights,
    searchInsights,
  };
}

export const InsightContainer = createContainer(useInsightContainer);

export const useInsightContext = (): any => useContainer(InsightContainer);
