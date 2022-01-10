import { Input } from '@chakra-ui/input';
import { Grid, GridItem, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React from 'react';
import { useTranslation } from 'next-i18next';

interface ProjectProps {
  index: number;
  github_url: string;
  title: string;
  description: string;
  created_by: string;
  changeHandler: (index: number, field: string, value: string) => void;
}

const Project: React.FC<ProjectProps> = ({
  index,
  github_url,
  title,
  description,
  created_by,
  changeHandler,
}) => {
  const { t } = useTranslation('common');

  return (
    <Grid width="90%" templateColumns="repeat(2, 1fr)" gap={4}>
      <GridItem w="100%">
        <Text mt={2}>{t('components.create_profile.project.title')}</Text>
        <Input
          value={title}
          onChange={(e) => changeHandler(index, 'title', e.target.value)}
          placeholder={t('components.create_profile.project.title_placeholder')}
          size="md"
        />
      </GridItem>
      <GridItem>
        <Text mt={2}>{t('components.create_profile.project.github_url')}</Text>
        <Input
          value={github_url}
          onChange={(e) => changeHandler(index, 'github_url', e.target.value)}
          placeholder={t(
            'components.create_profile.project.enter_github_placeholder'
          )}
          size="md"
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Text mt={2}>{t('components.create_profile.project.description')}</Text>
        <Textarea
          value={description}
          onChange={(e) => changeHandler(index, 'description', e.target.value)}
          placeholder={t(
            'components.create_profile.project.description_placeholder'
          )}
          size="md"
        />
      </GridItem>
    </Grid>
  );
};

export default Project;
