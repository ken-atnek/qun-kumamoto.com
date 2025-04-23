/* =======================================
 * 問合せページ
 * URL: src/app/contact/page.tsx
 * Created: 2025-04-22
 * Last updated: 2025-04-22
 * ======================================= */

'use client';

import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/Contact.module.scss';
import { useState } from 'react';
import Modal from '@/components/Modal';

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('');
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false); // 確認画面フラグ
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダル制御

  // **確認ボタンの処理**
  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inquiryType || !name || !email || !phone || !message) {
      setStatus('必須項目を入力してください');
      return;
    }

    setIsConfirming(true); // 確認画面へ
    setStatus('');
  };

  // **修正ボタンの処理（入力画面に戻る）**
  const handleEdit = () => {
    setIsConfirming(false);
  };

  // **送信処理**
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('inquiryType', inquiryType);
    formData.append('name', name);
    formData.append('company', company);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    try {
      const response = await fetch(
        'https://demo-qun-kumamoto.tuna-pic.co.jp/backend/contact.php',
        {
          method: 'POST',
          body: formData,
        }
      );

      const result = await response.json();
      // console.log('サーバーレスポンス:', result);

      if (result.success) {
        setInquiryType('');
        setStatus('');
        setIsModalOpen(true); // モーダルを開く
        setTimeout(() => setIsModalOpen(false), 3000); // 3秒後に自動閉じる
        setCompany('');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setIsConfirming(false); // 入力画面に戻す
      } else {
        setStatus(result.error || '送信に失敗しました。');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('エラー:', error);
      setStatus('エラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <PageTitle
        breadcrumb="Contact us"
        titleEn="Contact us"
        titleJp="ご依頼・お問い合わせ"
      />
      <article className={styles.contactContents}>
        <p className={styles.headNotice}>
          弊社へのご依頼・各種お問い合わせ・求人へのご応募は、下記フォームよりお問い合わせください。
        </p>
        <p className={styles.bottomNotice}>
          ＜お急ぎの場合＞ お急ぎの方は、お電話にてお問い合わせください。
        </p>
        <a href="tel:0968383515" className={styles.linkTel}>
          ＴＥＬ：０９６８-３８-３５１５
        </a>
        <form
          className={styles.blockForm}
          onSubmit={isConfirming ? handleSubmit : handleConfirm}
        >
          {isConfirming ? (
            // ✅ 確認画面
            <div className={styles.statusConfirm}>
              <p>入力内容を確認してください。</p>

              <div>{inquiryType}</div>
              <div>{company}</div>
              <div>{name}</div>
              <div>{email}</div>
              <div>{phone}</div>
              <div>{message}</div>

              <div className={styles.box_btn}>
                <button type="button" onClick={handleEdit}>
                  修正する
                </button>
                <button type="submit" disabled={loading}>
                  {loading ? '送信中…' : '送信'}
                </button>
              </div>
            </div>
          ) : (
            // ✅ 入力画面
            <div className={styles.boxFrom}>
              <div>
                <span>お問合せ内容</span>
                <div className={styles.checkRadio}>
                  <label>
                    <input
                      type="radio"
                      name="form01"
                      value="依頼"
                      checked={inquiryType === '依頼'}
                      onChange={(e) => setInquiryType(e.target.value)}
                    />
                    <span>ご依頼</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="form01"
                      value="問い合わせ"
                      checked={inquiryType === '問い合わせ'}
                      onChange={(e) => setInquiryType(e.target.value)}
                    />
                    <span>お問合せ</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="form01"
                      value="求人"
                      checked={inquiryType === '求人'}
                      onChange={(e) => setInquiryType(e.target.value)}
                    />
                    <span>求人への応募</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="form01"
                      value="その他"
                      checked={inquiryType === 'その他'}
                      onChange={(e) => setInquiryType(e.target.value)}
                    />
                    <span>その他</span>
                  </label>
                </div>
              </div>
              <div>
                <span>御社名</span>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="御社名"
                />
              </div>
              <div>
                <span>お名前</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="お名前を入力してください"
                />
              </div>
              <div>
                <span>メールアドレス</span>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="メールアドレスを入力してください"
                />
              </div>
              <div>
                <span>電話番号</span>

                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="お電話番号を入力してください"
                />
              </div>

              <div>
                <span>お問い合わせ用件</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="お問い合わせ内容を入力してください"
                />
              </div>
              <div className={styles.box_btn}>
                <button type="submit">確 認</button>
              </div>
            </div>
          )}
          <p>{status}</p>
        </form>
        {/* ✅ モーダル表示 */}
        {isModalOpen && (
          <Modal
            message="お問い合わせが送信されました。"
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </article>
    </main>
  );
}
