
import React from 'react';
import { FileText, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface Quote {
  id: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_year: number;
  service_type: string;
  description: string;
  status: string;
  estimated_cost: number;
  created_at: string;
}

interface QuotesHistoryProps {
  quotes: Quote[];
}

export const QuotesHistory: React.FC<QuotesHistoryProps> = ({ quotes }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-400" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'in_progress':
        return <AlertCircle className="w-5 h-5 text-blue-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-600';
      case 'pending':
        return 'bg-yellow-600';
      case 'cancelled':
        return 'bg-red-600';
      case 'in_progress':
        return 'bg-blue-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="bg-gray-800/50 rounded-2xl p-8">
      <div className="flex items-center mb-6">
        <FileText className="w-6 h-6 text-red-400 mr-3" />
        <h2 className="text-2xl font-bold text-red-400">Quote Requests</h2>
      </div>
      
      {quotes.length > 0 ? (
        <div className="space-y-4">
          {quotes.map((quote) => (
            <div key={quote.id} className="bg-gray-700/50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold text-white">
                    {quote.vehicle_year} {quote.vehicle_make} {quote.vehicle_model}
                  </h3>
                  <p className="text-gray-400 font-medium">{quote.service_type}</p>
                  {quote.description && (
                    <p className="text-gray-500 text-sm mt-1">{quote.description}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-2">{formatDate(quote.created_at)}</p>
                </div>
                
                <div className="text-right">
                  {quote.estimated_cost && (
                    <p className="text-xl font-bold text-white mb-2">
                      {formatPrice(quote.estimated_cost)}
                    </p>
                  )}
                  <div className="flex items-center justify-end space-x-2">
                    {getStatusIcon(quote.status)}
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${getStatusColor(quote.status)} text-white capitalize`}>
                      {quote.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center py-8">
          No quote requests yet. Visit our{' '}
          <a href="/quote" className="text-red-400 hover:text-red-300 underline">
            Get Quote
          </a>{' '}
          page to request a quote!
        </p>
      )}
    </div>
  );
};
