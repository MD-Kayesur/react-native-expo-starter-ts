import { View, Text, ScrollView, Platform, useWindowDimensions, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SignedIn, SignedOut } from '@clerk/clerk-expo';
import { Button } from '@/components/ui/Button';
import SafeScreen from '@/components/SafeScreen';

export default function LandingPage() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const isTablet = width > 768;
  const maxContentWidth = isWeb ? 800 : '100%';

  return (
    <SafeScreen>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          {/* Header Section */}
          <View style={[styles.headerSection, isWeb && { maxWidth: maxContentWidth, alignSelf: 'center', width: '100%' }]}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>🚀</Text>
            </View>
            
            <Text style={[styles.mainTitle, isTablet && styles.mainTitleTablet]}>
              Welcome to React Native
            </Text>
            <Text style={[styles.mainTitle, isTablet && styles.mainTitleTablet, styles.titleSpacing]}>
              Expo Starter Template
            </Text>
            
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>
                ⚡ Powered by TypeScript
              </Text>
            </View>
            
           
          </View>

          {/* Features Section */}
          <View style={[styles.featuresContainer, isWeb && { maxWidth: maxContentWidth, alignSelf: 'center', width: '100%' }]}>
            <Text style={[styles.sectionTitle, isTablet && styles.sectionTitleTablet]}>
              Everything You Need to Start Building
            </Text>

            <View style={[styles.featuresGrid, isWeb && isTablet && styles.featuresGridTablet]}>
              {/* Feature 1 */}
              <View style={[styles.featureCard, styles.featureCardBlue, isWeb && isTablet && styles.featureCardHalf]}>
                <View style={styles.featureHeader}>
                  <Text style={styles.featureIcon}>⚛️</Text>
                  <Text style={styles.featureTitle}>
                    React Native & Expo
                  </Text>
                </View>
                <Text style={styles.featureDescription}>
                  Latest Expo SDK 54 with React Native 0.81.5
                </Text>
              </View>

              {/* Feature 2 */}
              <View style={[styles.featureCard, styles.featureCardPurple, isWeb && isTablet && styles.featureCardHalf]}>
                <View style={styles.featureHeader}>
                  <Text style={styles.featureIcon}>📘</Text>
                  <Text style={styles.featureTitle}>
                    TypeScript Ready
                  </Text>
                </View>
                <Text style={styles.featureDescription}>
                  Full TypeScript support with type safety
                </Text>
              </View>

              {/* Feature 3 */}
              <View style={[styles.featureCard, styles.featureCardGreen, isWeb && isTablet && styles.featureCardHalf]}>
                <View style={styles.featureHeader}>
                  <Text style={styles.featureIcon}>🎨</Text>
                  <Text style={styles.featureTitle}>
                    NativeWind (Tailwind CSS)
                  </Text>
                </View>
                <Text style={styles.featureDescription}>
                  Beautiful UI with utility-first CSS
                </Text>
              </View>

              {/* Feature 4 */}
              <View style={[styles.featureCard, styles.featureCardOrange, isWeb && isTablet && styles.featureCardHalf]}>
                <View style={styles.featureHeader}>
                  <Text style={styles.featureIcon}>🔐</Text>
                  <Text style={styles.featureTitle}>
                    Clerk Authentication
                  </Text>
                </View>
                <Text style={styles.featureDescription}>
                  Secure authentication out of the box
                </Text>
              </View>

              {/* Feature 5 */}
              <View style={[styles.featureCard, styles.featureCardPink, isWeb && isTablet && styles.featureCardHalf]}>
                <View style={styles.featureHeader}>
                  <Text style={styles.featureIcon}>🗂️</Text>
                  <Text style={styles.featureTitle}>
                    Expo Router
                  </Text>
                </View>
                <Text style={styles.featureDescription}>
                  File-based routing for easy navigation
                </Text>
              </View>

              {/* Feature 6 */}
              <View style={[styles.featureCard, styles.featureCardIndigo, isWeb && isTablet && styles.featureCardHalf]}>
                <View style={styles.featureHeader}>
                  <Text style={styles.featureIcon}>📦</Text>
                  <Text style={styles.featureTitle}>
                    Redux Toolkit
                  </Text>
                </View>
                <Text style={styles.featureDescription}>
                  State management configured and ready
                </Text>
              </View>
            </View>

            {/* CTA Buttons */}
            <SignedOut>
              <View style={[styles.buttonContainer, isWeb && isTablet && styles.buttonContainerTablet, isWeb && { maxWidth: maxContentWidth, alignSelf: 'center', width: '100%' }]}>
                <View style={[styles.buttonWrapper, isWeb && isTablet && styles.buttonWrapperHalf]}>
                  <Button 
                    title="Get Started - Sign Up" 
                    onPress={() => router.push('/(auth)/sign-up')}
                    variant="primary"
                  />
                </View>
                
                <View style={[styles.buttonWrapper, isWeb && isTablet && styles.buttonWrapperHalf]}>
                  <Button 
                    title="Sign In" 
                    onPress={() => router.push('/(auth)/sign-in')}
                    variant="secondary"
                  />
                </View>
              </View>
            </SignedOut>

            <SignedIn>
              <View style={[styles.singleButtonContainer, isWeb && { maxWidth: maxContentWidth, alignSelf: 'center', width: '100%' }]}>
                <Button 
                  title="Continue to App →" 
                  onPress={() => router.push('/(app)')}
                  variant="primary"
                />
              </View>
            </SignedIn>

            {/* Footer */}
            <View style={[styles.footer, isWeb && { maxWidth: maxContentWidth, alignSelf: 'center', width: '100%' }]}>
              <Text style={styles.footerText}>
                Built with ❤️ using React Native Expo & TypeScript
              </Text>
              <Text style={styles.footerSubtext}>
                Ready to build amazing mobile apps
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#3B82F6', // blue-500
  },
  headerSection: {
    paddingTop: Platform.OS === 'web' ? 80 : 64,
    paddingBottom: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 9999,
    padding: 16,
    marginBottom: 24,
  },
  iconText: {
    fontSize: 48,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  mainTitleTablet: {
    fontSize: 48,
  },
  titleSpacing: {
    marginBottom: 16,
  },
  badgeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 9999,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  featuresContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  sectionTitleTablet: {
    fontSize: 32,
  },
  featuresGrid: {
    gap: 16,
    marginBottom: 32,
  },
  featuresGridTablet: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  featureCard: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
    width: '100%',
  },
  featureCardHalf: {
    width: '48%',
    marginHorizontal: '1%',
  },
  featureCardBlue: {
    backgroundColor: '#EFF6FF',
    borderColor: '#DBEAFE',
  },
  featureCardPurple: {
    backgroundColor: '#F5F3FF',
    borderColor: '#E9D5FF',
  },
  featureCardGreen: {
    backgroundColor: '#F0FDF4',
    borderColor: '#D1FAE5',
  },
  featureCardOrange: {
    backgroundColor: '#FFF7ED',
    borderColor: '#FED7AA',
  },
  featureCardPink: {
    backgroundColor: '#FDF2F8',
    borderColor: '#FBCFE8',
  },
  featureCardIndigo: {
    backgroundColor: '#EEF2FF',
    borderColor: '#E0E7FF',
  },
  featureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  featureDescription: {
    fontSize: 14,
    color: '#4B5563',
    marginLeft: 40,
  },
  buttonContainer: {
    gap: 12,
    marginBottom: 32,
  },
  buttonContainerTablet: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonWrapper: {
    width: '100%',
  },
  buttonWrapperHalf: {
    width: '48%',
  },
  singleButtonContainer: {
    marginBottom: 32,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 32,
    paddingTop: 16,
  },
  footerText: {
    color: '#9CA3AF',
    fontSize: 14,
    textAlign: 'center',
  },
  footerSubtext: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 8,
  },
});
