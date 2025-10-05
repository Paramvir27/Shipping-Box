export const calculateShippingCharge = (weight, country, charges) => {
  const ratePerKg = charges[country];
  if (!ratePerKg || !weight) return 0;
  return Number((ratePerKg * weight).toFixed(2));
};

export const validateBoxWeight = (weight) => {
  return weight >= 0.1 && weight <= 100;
};

export const createShippingBox = (formData, shippingCharge) => {
  return {
    id: Date.now(),
    receiverName: formData.receiverName,
    boxWeight: formData.boxWeight,
    boxColor: formData.boxColor,
    destinationCountry: formData.destinationCountry,
    shippingCharge,
  };
};

export const getChargePerKg = (country, charges) => {
  return charges[country] || 0;
};
