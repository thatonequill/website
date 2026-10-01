/**
 * Ligne de séparation horizontale.
 */
export const HorizontalLine = ({ thickness = '1px', margin = '20px 0'}) => {
  return (
    <div 
      style={{
        width: '100%',
        height: thickness,
        // On utilise une couleur neutre pour la démo
        backgroundColor: 'color-mix(in srgb, var(--demo-primary) 15%, transparent)',
        margin: margin,
        border: 'none',
      }} 
    />
  );
};