import { Heading, Text, HStack, Stack } from '@chakra-ui/react';

type CompanyInfo = {
  name: string;
  organization_description: string;
  logo_url: string;
};

type Jobinfo = {
  closeJobModal: () => void;
  compensation: string;
  description: string;
  position: string;
  companyInfo: CompanyInfo[];
};

export default function JobPostModal({
  closeJobModal,
  compensation,
  description,
  position,
  companyInfo,
}: Jobinfo) {
  return (
    <Stack
      position="fixed"
      borderRadius="18px"
      p={5}
      m="auto"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%);"
      w={{ '2xl': '50%', sm: '80%' }}
      h="fit-content"
      textAlign="center"
      bg="neutral.100"
      zIndex={1000}
    >
      <JobModalHeader position={position} />
    </Stack>
  );
}

const JobModalHeader = ({ position }: any) => {
  return (
    <HStack>
      <Heading fontSize="header1">{position}</Heading>
    </HStack>
  );
};

const JobModalContent = ({ description }: any) => {
  return <Stack>{description}</Stack>;
};
