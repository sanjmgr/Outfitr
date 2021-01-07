import React from 'react';
import { Box, Text } from '../../../components';
import { DataPoint } from './Graph';
import moment from 'moment';

interface TransactionProps {
  transaction: DataPoint;
}

const Transaction = ({ transaction }: TransactionProps) => {
  return (
    <Box
      marginTop='l'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'>
      <Box>
        <Box flexDirection='row' alignItems='center' marginBottom='s'>
          <Box
            backgroundColor={transaction.color}
            marginRight='s'
            style={{ height: 8, width: 8, borderRadius: 4 }}
          />
          <Text variant='title3'>{`#${transaction.id}`}</Text>
        </Box>
        <Text color='info'>
          {`$${transaction.value} - ${moment(transaction.date).format(
            'DD MMM, YYYY'
          )}`}
        </Text>
      </Box>
      <Box>
        <Text color='secondary' variant='button'>
          See more
        </Text>
      </Box>
    </Box>
  );
};

export default Transaction;
