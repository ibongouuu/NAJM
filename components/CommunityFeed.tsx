
import React, { useState, useEffect } from 'react';
import { Language, User, TourPhoto } from '../types';
import { Camera, Upload, UserPlus, Image as ImageIcon, MapPin, LogOut } from 'lucide-react';

interface CommunityFeedProps {
  lang: Language;
}

const CommunityFeed: React.FC<CommunityFeedProps> = ({ lang }) => {
  const [user, setUser] = useState<User | null>(null);
  const [photos, setPhotos] = useState<TourPhoto[]>([]);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  
  // Sign up state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Upload state
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Load existing user and photos from local storage
    const savedUser = localStorage.getItem('najm_user');
    if (savedUser) setUser(JSON.parse(savedUser));

    const savedPhotos = localStorage.getItem('najm_photos');
    if (savedPhotos) {
      setPhotos(JSON.parse(savedPhotos));
    } else {
      // Mock initial photos
      const mockPhotos: TourPhoto[] = [
        {
          id: 'm1',
          imageUrl: 'https://images.unsplash.com/photo-1570737197764-39fa78efae22?auto=format&fit=crop&q=80&w=800',
          userName: 'Ahmed Ali',
          caption: lang === 'ar' ? 'منظر رائع من إيسيك كول!' : 'Amazing view from Issyk-Kul!',
          location: 'Issyk-Kul',
          timestamp: Date.now() - 10000000
        },
        {
          id: 'm2',
          imageUrl: 'https://images.unsplash.com/photo-1549413243-6c8a77a4190b?auto=format&fit=crop&q=80&w=800',
          userName: 'Sara J.',
          caption: lang === 'ar' ? 'صباح منعش في الجبال' : 'Refreshing morning in the mountains',
          location: 'Ala-Archa',
          timestamp: Date.now() - 5000000
        }
      ];
      setPhotos(mockPhotos);
      localStorage.setItem('najm_photos', JSON.stringify(mockPhotos));
    }
  }, [lang]);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    const newUser = { name, email };
    setUser(newUser);
    localStorage.setItem('najm_user', JSON.stringify(newUser));
    setIsSigningUp(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('najm_user');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage || !user) return;

    const newPhoto: TourPhoto = {
      id: Math.random().toString(36).substr(2, 9),
      imageUrl: selectedImage,
      userName: user.name,
      caption,
      location,
      timestamp: Date.now()
    };

    const updatedPhotos = [newPhoto, ...photos];
    setPhotos(updatedPhotos);
    localStorage.setItem('najm_photos', JSON.stringify(updatedPhotos));
    
    // Reset form
    setShowUpload(false);
    setSelectedImage(null);
    setCaption('');
    setLocation('');
  };

  return (
    <section id="community" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {lang === 'ar' ? 'معرض المسافرين' : 'Traveler Gallery'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">
              {lang === 'ar' 
                ? 'شارك أجمل لحظات رحلتك في قيرغيزستان مع عائلة نجم.'
                : 'Share your most beautiful moments in Kyrgyzstan with the Najm family.'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-2 pl-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-right rtl:text-left">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{user.name}</p>
                  <button onClick={handleLogout} className="text-[10px] text-orange-500 font-bold uppercase tracking-widest hover:underline">
                    {lang === 'ar' ? 'تسجيل الخروج' : 'Log Out'}
                  </button>
                </div>
                <button 
                  onClick={() => setShowUpload(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2"
                >
                  <Camera size={20} />
                  <span className="font-bold text-sm hidden sm:inline">{lang === 'ar' ? 'أضف صورة' : 'Add Photo'}</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsSigningUp(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-xl shadow-orange-500/20 flex items-center gap-2"
              >
                <UserPlus size={20} />
                <span>{lang === 'ar' ? 'انضم إلينا' : 'Join Us'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={photo.imageUrl} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                   <div className="flex items-center gap-1 mb-1">
                      <MapPin size={12} className="text-orange-400" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{photo.location}</span>
                   </div>
                   <p className="text-sm font-medium line-clamp-2">{photo.caption}</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs">
                    {photo.userName[0]}
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{photo.userName}</span>
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-600">
                  {new Date(photo.timestamp).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if no photos */}
        {photos.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
            <ImageIcon size={64} className="mx-auto text-slate-300 dark:text-slate-700 mb-4" />
            <p className="text-slate-500 dark:text-slate-400 font-bold">
              {lang === 'ar' ? 'لا توجد صور بعد. كن أول من يشارك!' : 'No photos yet. Be the first to share!'}
            </p>
          </div>
        )}
      </div>

      {/* Sign Up Modal */}
      {isSigningUp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={() => setIsSigningUp(false)}></div>
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 animate-in zoom-in fade-in duration-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 text-center">
              {lang === 'ar' ? 'انضم إلى مجتمع نجم' : 'Join Najm Community'}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-center mb-8">
              {lang === 'ar' ? 'سجل للمشاركة بصورك وتجربتك معنا.' : 'Sign up to share your photos and experiences with us.'}
            </p>
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-500/30 rounded-2xl px-5 py-3 outline-none transition-all dark:text-white"
                  placeholder={lang === 'ar' ? 'مثال: أحمد محمد' : 'e.g. Ahmed Mohamed'}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-500/30 rounded-2xl px-5 py-3 outline-none transition-all dark:text-white"
                  placeholder="name@example.com"
                />
              </div>
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition shadow-xl shadow-indigo-500/20">
                {lang === 'ar' ? 'إنشاء حساب' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUpload && user && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={() => setShowUpload(false)}></div>
          <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 animate-in slide-in-from-bottom fade-in duration-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {lang === 'ar' ? 'شارك لحظتك' : 'Share Your Moment'}
            </h3>
            <form onSubmit={handleUpload} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{lang === 'ar' ? 'الموقع' : 'Location'}</label>
                    <input 
                      type="text" 
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-500/30 rounded-2xl px-5 py-3 outline-none transition-all dark:text-white"
                      placeholder={lang === 'ar' ? 'مثال: بحيرة إيسيك كول' : 'e.g. Issyk-Kul Lake'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{lang === 'ar' ? 'وصف الصورة' : 'Caption'}</label>
                    <textarea 
                      required
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-500/30 rounded-2xl px-5 py-3 outline-none transition-all dark:text-white min-h-[100px] resize-none"
                      placeholder={lang === 'ar' ? 'أخبرنا عن هذه اللحظة...' : 'Tell us about this moment...'}
                    />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{lang === 'ar' ? 'اختر صورة' : 'Select Photo'}</label>
                  <div className="flex-1 relative border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden flex items-center justify-center group cursor-pointer">
                    {selectedImage ? (
                      <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center p-4">
                        <Upload size={32} className="mx-auto text-slate-300 mb-2" />
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{lang === 'ar' ? 'اضغط للرفع' : 'Click to Upload'}</p>
                      </div>
                    )}
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition shadow-xl shadow-indigo-500/20">
                  {lang === 'ar' ? 'نشر الآن' : 'Publish Now'}
                </button>
                <button type="button" onClick={() => setShowUpload(false)} className="px-8 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold py-4 rounded-2xl transition">
                  {lang === 'ar' ? 'إلغاء' : 'Cancel'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CommunityFeed;
