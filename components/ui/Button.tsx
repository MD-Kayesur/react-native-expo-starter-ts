import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
}

export function Button({ 
  title, 
  onPress, 
  loading, 
  disabled,
  variant = 'primary' 
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    danger: 'bg-danger',
  };

  return (
    <TouchableOpacity
      className={`${variantClasses[variant]} px-4 py-3 rounded-lg items-center my-1 ${disabled || loading ? 'opacity-50' : ''}`}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className="text-white text-base font-semibold">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
