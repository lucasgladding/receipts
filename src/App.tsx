import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReceiptsTable from './ReceiptsTable';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ReceiptsTable />
    </QueryClientProvider>
  );
}

export default App;
